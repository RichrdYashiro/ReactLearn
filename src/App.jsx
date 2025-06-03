import { useState } from "react";
import Project1_1 from "./project/project-1/project-1-1/project1_1";
import Project1_2 from "./project/project-1/project-1-2/project1_2";
import Project1_3 from "./project/project-1/project-1-3/project1_3";
import styles from "./styles/app.module.css";

function App() {
	const [tasks] = useState([
		{
			id: 1,
			name: "Задание 1.1: Динамический список",
			component: <Project1_1 />,
		},
		{
			id: 2,
			name: "Задание 1.2: Варка пельмешек",
			component: <Project1_2 />,
		},
		{
			id: 3,
			name: "Задание 1.3: Калькулятор",
			component: <Project1_3 />,
		},
	]);

	const [currentTask, setCurrentTask] = useState(0);

	return (
		<div className={styles.container}>
			<h1>Мои React задания</h1>

			<nav className={styles.nav}>
				{tasks.map((task, index) => (
					<button
						key={task.id}
						className={currentTask === index ? styles.active : ""}
						onClick={() => setCurrentTask(index)}
					>
						{task.name}
					</button>
				))}
			</nav>

			<div className={styles.taskContainer}>
				{tasks[currentTask].component}
			</div>
		</div>
	);
}

export default App;
