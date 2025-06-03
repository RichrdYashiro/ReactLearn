import { useState } from "react";
import Project1_1 from "./project/project-1/project-1-1/project1_1";
import styles from "./styles/app.module.css";

function App() {
	const [tasks] = useState([
		{
			id: 1,
			name: "Задание 1.1: Динамический список",
			component: <Project1_1 />,
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
