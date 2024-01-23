import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import mockData from "../../mockData";
import { Card } from "../card/Card";
import { useState } from "react";
import "./kanban.css";


export function Kanban() {
  const [data, setData] = useState(mockData);

  const onDragEnd = (result) => {
    
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      // Ens retorna el index del primer element que compleixi les caracteristiques
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const destinationColIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );
      const sourceCol = data[sourceColIndex];
      const destinationCol = data[destinationColIndex];

      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];

      // Eliminar elemento arrastrado de su columna
      const [removed] = sourceTask.splice(source.index, 1);
      // Añadir el elemento eliminado a s nueva columna destino
      destinationTask.splice(destination.index, 0, removed);

      data[sourceColIndex].tasks = sourceTask;
      data[destinationColIndex].tasks = destinationTask;

      // Esto modifica la variable data
      setData(data);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flexRow">
        {data.map((section) => (
          // el id es del mockdata ( el ide del element i el id de la columna)
          <Droppable key={section.id} droppableId={section.id}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                className="kanban__section"
                ref={provided.innerRef}
              >
                <div className="kanban__section__title">{section.title}</div>
                <div className="kanban__section__content">
                  {section.tasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          style={{
                            ...provided.draggableProps.style,
                            opacity: snapshot.isDragging ? "0,5" : "1",
                          }}
                        >
                          <Card>{task.title}</Card>
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}
