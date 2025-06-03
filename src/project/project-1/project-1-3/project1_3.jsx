import "../../../styles/index.css";
import styles from "./project.module.css";
import { useState } from "react";
export default function Project1_3() {
	let NUMS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	const [operand1, setOperand1] = useState("");
	const [operand, setOperand] = useState("");
	const [operand2, setOperand2] = useState("");
	const [isResult, setIsResult] = useState(false);

	const btnsConcat = (num) => {
		if (isResult) {
			setOperand1(num);
			setOperand("");
			setOperand2("");
			setIsResult(false);
		} else if (!operand) {
			setOperand1((prev) => (prev === "0" ? num : prev + num));
		} else {
			setOperand2((prev) => (prev === "0" ? num : prev + num));
		}
	};
	const btnReset = () => {
		setOperand1("");
		setOperand("");
		setOperand2("");
		setIsResult(false);
	};
	const btnSelect = () => {
		if (!operand1 || !operand2 || !operand) return;
		const num1 = parseInt(operand1, 10);
		const num2 = parseInt(operand2, 10);
		let result;

		if (operand === "+") {
			result = num1 + num2;
		} else if (operand === "-") {
			result = num1 - num2;
		}
		setOperand("");
		setIsResult(true);
		setOperand1(result.toString());
		setOperand2("");
	};
	const btnMinus = () => {
		if (!operand1) return;
		setOperand("-");
	};
	const btnPlus = () => {
		if (!operand1) return;
		setOperand("+");
	};
	return (
		<>
			<div className={styles.app}>
				<h1 className={styles["page-heading"]}>Ввод значения</h1>
				<p className={styles["no-margin-text"]}>
					<output
						className={
							styles["current-value"] +
							(isResult ? ` ${styles.result}` : "")
						}
					>
						{operand1}
						{operand}
						{operand2}
					</output>
				</p>

				<div className={styles["list-container"]}>
					<div className={styles.grid}>
						{NUMS.map((num) => (
							<button
								className={styles["list-item"]}
								key={num}
								onClick={() => btnsConcat(num)}
							>
								{num}
							</button>
						))}
						<button
							className={styles["list-item"]}
							onClick={btnReset}
						>
							C
						</button>
						<button
							className={styles["list-item"]}
							onClick={btnPlus}
						>
							+
						</button>
						<button
							className={styles["list-item"]}
							onClick={btnMinus}
						>
							-
						</button>
						<button
							className={styles["list-item"]}
							onClick={btnSelect}
						>
							=
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
