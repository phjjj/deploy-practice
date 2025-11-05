import { useState } from "react";

interface TwoProps {
	id: string;
	onNext: (pw: string) => void;
	onBack: () => void;
}

const Two = ({ id, onNext, onBack }: TwoProps) => {
	const [pw, setPw] = useState("");
console.log(id );
	return (
		<div style={{ padding: "20px" }}>
			<h2>비밀번호 입력</h2>
			<p>ID: {id}</p>
			<input
				type="password"
				placeholder="비밀번호를 입력하세요"
				value={pw}
				onChange={(e) => setPw(e.target.value)}
			/>
			<div>
				<button onClick={() => onNext(pw)} disabled={!pw}>
					다음
				</button>
				<button onClick={onBack}>이전</button>
			</div>
		</div>
	);
};

export default Two;