import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState, useCallback } from 'react';
import ReactFlow, { addEdge, ConnectionLineType, useNodesState, useEdgesState } from 'react-flow-renderer';
import dagre from 'dagre';
import { initialNodes, initialEdges } from '../data/courses.js';


const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 10;
const nodeHeight = 60;

const getLayoutedElements = (nodes, edges, direction = 'TB') => {
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: 'TB', nodesep: 60, ranksep: 40, ranker: 'tight-tree'});

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

const LayoutFlow = () => {
  const availableNodes = ['bus001', 'eco001', 'bus003', 'eco045', 'math021', 'cse007', 'engl001'];
  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, type: ConnectionLineType.SmoothStep, animated: true }, eds)),
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
        }
        break;
      }
    }

    onLayout();
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
    <div className={styles.layoutflow}>
      {nodes && <ReactFlow
        nodes={nodes}
        edges={edges}
        style={{height: 800, width: '100%'}}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionLineType={ConnectionLineType.SmoothStep}
        onLoad={onLoad}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        panOnDrag={true}
        panOnScroll={false}
        fitView
        deleteKeyCode={null}
        nodesConnectable={false}
        onNodeClick={onNodeClick}
      />
      }
    </div>
  );
};


function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>CSB Flowchart</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h3 styles={styles.title}>CSB Flowchart</h3> */}
        <div className={styles.mainContainer}>
          <LayoutFlow></LayoutFlow>
          <div className={styles.coursesInfo}>
            <h3 styles={styles.title}>CSB Flowchart</h3>
            <p>
              This is a flowchart of the courses needed to complete Computer Science & Business
              degree at Lehigh University.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home;
