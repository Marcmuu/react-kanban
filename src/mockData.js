import {v4 as uuidv4} from "uuid"

const mockData = [
    {
        id: uuidv4(),
        title: "📄 Por hacer", 
        tasks: [
            {
                id: uuidv4(),
                title: "Estudiar Mongo DB o Firebase"
            },
            {
                id: uuidv4(),
                title: "Estudiar Astro.js"
            },
            {
                id: uuidv4(),
                title: "Estudiar Next.js"
            }
        ]
    },
    {
        id: uuidv4(),
        title: "✏️ En progreso", 
        tasks: [
            {
                id: uuidv4(),
                title: "Estudiar Javascript"
            },
            {
                id: uuidv4(),
                title: "Estudiar React.js"
            },
        ] 
    },
    {
        id: uuidv4(),
        title: "✅ Completado", 
        tasks: [
            {
                id: uuidv4(),
                title: "Estudiar HTML"
            },
            {
                id: uuidv4(),
                title: "Estudiar CSS"
            },
        ] 
    }
];

export default mockData;