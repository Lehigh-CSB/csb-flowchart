import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState, useCallback } from 'react';
import ReactFlow, { addEdge, ConnectionLineType, useNodesState, useEdgesState, useReactFlow } from 'react-flow-renderer';
import dagre from 'dagre';
import { initialNodes, initialEdges } from '../data/courses.js';
import CourseCard from '../components/CourseCard';
import {edgeTypes} from '../data/courses.js';
import { SmartStepEdge } from '@tisoap/react-flow-smart-edge'

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 10;
const nodeHeight = 60;

const getLayoutedElements = (nodes, edges, direction = 'TB', nodesep=60, ranksep=40) => {
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction, nodesep: nodesep, ranksep: ranksep, ranker: 'tight-tree'});

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isHorizontal ? 'left' : 'top';
    node.sourcePosition = isHorizontal ? 'right' : 'bottom';

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2 + Math.random() / 1000,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });

  return { nodes, edges };
};

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges
);

const LayoutFlow = ({panIsDraggable, isMobile, height}) => {
  const availableNodes = ['bus001', 'eco001', 'bus003', 'eco045', 'math021', 'cse007', 'engl001'];
  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, type: SmartStepEdge, animated: true }, eds)),
    []
  );

  const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
  }

  const onNodeClick = (node) => {
    let nodeId = node.target.textContent.toLowerCase().replace(/ /g,'');
    
    // for changing the color of the clicked node
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].id === nodeId) {
        if (nodes[i].style.background != '#7ad7f0') {
          nodes[i].style = {
            background: '#7ad7f0',
            width: 60,
            color: '#000',
            fontsize: '20px',
            fontFamily: 'Helvetica',
            boxShadow: '5px 5px 5px 0px rgba(0,0,0,.10)'
          }
          checkPrerequisites(nodeId);
          checkAvailable(nodeId);
        }
        else {
          let bckgColor = '#fff';
          let txtColor = '#000';
          if(availableNodes.includes(nodeId)) {
            bckgColor = '#16558f';
            txtColor = '#fff';
          }
          nodes[i].style = {
            background: bckgColor,
            width: 60,
            color: txtColor,
            fontsize: '20px',
            fontFamily: 'Helvetica',
            boxShadow: '5px 5px 5px 0px rgba(0,0,0,.10)'
          }
          checkAvailable(nodeId);
        }
        break;
      }
    }

    onLayout();
  }

  const checkAvailable = (nodeId) => {
    for(let i = 0; i < edges.length; i++) {
      if(edges[i].source === nodeId) {
        let prereqNodeId = edges[i].target;
        let targetCount = 0;
        let targetMetCount = 0;
        for(let j = 0; j < edges.length; j++) {
          if(edges[j].target === prereqNodeId) {
            targetCount++;
            let nodeId = edges[j].source;
            for(let k = 0; k < nodes.length; k++) {
              if(nodes[k].id === nodeId){
                if(nodes[k].style.background === '#7ad7f0') {
                  targetMetCount++;
                }
                break;
              }
            }
          }
        }
        if(targetCount === targetMetCount) {
          for(let i = 0; i < nodes.length; i++) {
            if(nodes[i].id === prereqNodeId) {
              if (nodes[i].style.background != '#7ad7f0') {
                nodes[i].style = {
                  background: '#16558f',
                  width: 60,
                  color: '#fff',
                  fontsize: '20px',
                  fontFamily: 'Helvetica',
                  boxShadow: '5px 5px 5px 0px rgba(0,0,0,.10)'
                }
              }
            }
          }
        }
        else{
          for(let i = 0; i < nodes.length; i++) {
            if(nodes[i].id === prereqNodeId) {
              if (nodes[i].style.background != '#fff') {
                nodes[i].style = {
                  background: '#fff',
                  width: 60,
                  color: '#000',
                  fontsize: '20px',
                  fontFamily: 'Helvetica',
                  boxShadow: '5px 5px 5px 0px rgba(0,0,0,.10)'
                }
              }
            }
          }
        }
        checkAvailable(prereqNodeId);
      }
    }
  }

  const checkPrerequisites = (nodeId) => {
    // for changing the color of prerequisites
    for(let i = 0; i < edges.length; i++) {
      if(edges[i].target === nodeId) {
        let prereqNodeId = edges[i].source;
        for(let i = 0; i < nodes.length; i++) {
          if(nodes[i].id === prereqNodeId) {
            if (nodes[i].style.background != '#7ad7f0') {
              nodes[i].style = {
                background: '#7ad7f0',
                width: 60,
                color: '#000',
                fontsize: '20px',
                fontFamily: 'Helvetica',
                boxShadow: '5px 5px 5px 0px rgba(0,0,0,.10)'
              }
            }
            checkPrerequisites(prereqNodeId);
          }
        }
      }
    }
  }
  
  const onLayout = useCallback(
    (direction) => {
      const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
        nodes,
        edges,
        direction
      );

      setNodes([...layoutedNodes]);
      setEdges([...layoutedEdges]);
    },
    [nodes, edges]
  );

  return (
     <>{nodes && <ReactFlow
        nodes={nodes}
        edges={edges}
        edgeTypes={edgeTypes}
        style={{height: height, width: '100%'}}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionLineType={SmartStepEdge}
        onLoad={onLoad}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        panOnDrag={panIsDraggable}
        panOnScroll={false}
        fitView
        deleteKeyCode={null}
        nodesConnectable={false}
        onNodeClick={onNodeClick}
      />
      }
    </>
  );
};

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: 841,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

function Home() {
  const isMobile = useMediaQuery(600);
  const nodes = initialNodes;
  nodes.sort(function(a, b) {
    return a.data.label === b.data.label ? 0 : a.data.label < b.data.label ? -1 : 1;
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>CSB Flowchart</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.mainContainer}>
          {!isMobile ? (
            <><div className={styles.layoutflowDesktop}>
              <LayoutFlow panIsDraggable={false} isMobile={isMobile} height={'100%'}></LayoutFlow>
            </div><div className={styles.coursesInfo}>
                <h3 styles={styles.title}>CSB Flowchart</h3>
                <p>
                  This is a flowchart of the courses needed to complete Computer Science & Business
                  degree at Lehigh University.
                </p>
                {nodes.map((node, index) => {
                  return (
                    <CourseCard key={index} name={node.data.label}>
                    </CourseCard>
                  );
                })}
              </div></>
          ) : (
            <div className={styles.layoutflowMobile}>
              <h3 styles={styles.title}>CSB Flowchart</h3>
              <LayoutFlow panIsDraggable={true} isMobile={isMobile} height={'800px'}></LayoutFlow>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default Home;
