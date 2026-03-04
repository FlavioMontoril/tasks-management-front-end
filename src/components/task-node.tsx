import { useCallback } from 'react';
import type { Connection } from '@xyflow/react';
import {
    ReactFlow,
    // MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    ControlButton,
    // ConnectionMode,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import type { Task } from '../mock/tasks';
import { X } from 'lucide-react';

type TaskNodeProps = {
    task: Task;
    onClose: () => void
};

export default function TaskNode({ task, onClose }: TaskNodeProps) {

    const initialNodes = [
        {
            id: 'code',
            position: { x: 300, y: 20 },
            data: { label: task.codigo },
        },
        {
            id: 'details',
            position: { x: 300, y: 150 },
            data: {
                label: `Nome: ${task.nome} | Data: ${task.dataCriacao} | Status: ${task.status}`,
            },
        },
    ];

    const initialEdges = [
        { id: 'e1', source: 'code', target: 'details' },
    ];

    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params: Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    return (
        <div className="w-full h-full">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onConnect={onConnect}
                // connectionMode={ConnectionMode.Loose}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodesDraggable={true}
                fitViewOptions={{ padding: 2 }}

                fitView
            >
                <Background
                    gap={10}
                    size={0}
                    color="gray" />
                {/* <MiniMap /> */}
                <Controls >
                    <ControlButton
                        title='Fechar'
                        onClick={onClose}>
                        <X color='black' />
                    </ControlButton>
                </Controls>
                <Background />
            </ReactFlow>
        </div>
    );
}
