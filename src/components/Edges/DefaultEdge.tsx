import { EdgeProps, getSmoothStepPath } from 'reactflow';

export function DefaultEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps ) {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path stroke-[3] stroke-zinc-300 "
        d={edgePath}
        markerEnd={markerEnd}
      />
    </>
  );
}