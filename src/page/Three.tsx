import { useState } from "react";

interface ThreeProps {
	id: string;
	pw: string;
	onBack: () => void;
	onComplete: (name: string) => void;
}

const Three = ({ id, pw, onBack, onComplete }: ThreeProps) => {
	const [name, setName] = useState("");

	return (
		<div style={{ padding: "20px" }}>
			<h2>그 외 정보 입력</h2>
			<p>ID: {id}</p>
			<p>비밀번호: {"*".repeat(pw.length)}</p>
			<input
				type="text"
				placeholder="이름을 입력하세요"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<div>
				<button onClick={() => onComplete(name)} disabled={!name}>
					완료
				</button>
				<button onClick={onBack}>이전</button>
			</div>
		</div>
	);
};

export default Three;