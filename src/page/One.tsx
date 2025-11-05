import { useState } from "react";

interface OneProps {
	onNext: (id: string) => void;
}

const One = ({ onNext }: OneProps) => {
	const [id, setId] = useState("");

	return (
		<div style={{ padding: "20px" }}>
			<h2>ID 입력</h2>
			<input
				type="email"
				placeholder="ID를 입력하세요"
				value={id}
				onChange={(e) => setId(e.target.value)}
			/>
			<button onClick={() => onNext(id)} disabled={!id}>
				다음
			</button>
		</div>
	);
};

export default One;