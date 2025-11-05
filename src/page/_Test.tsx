import { useFunnel, type UseFunnelOptions } from "@use-funnel/react-router-dom";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import { useEffect } from "react";

type Steps = {
    step1: {
        id?: string
        pw?: string
        name?: string
    }
    step2: {
        id: string
        pw?: string
        name?: string
    }
    step3: {
        id: string
        pw: string
        name?: string
    }
};

const options: UseFunnelOptions<Steps> = {
    id: "test",
    initial: {
        step: "step1",
        context: {
            id: "",
            pw: "",
            name: "",
        },
    },
};

const MOCK_DATA = {
    step: 3,
    data:{
        id: "test",
        pw: "test",
        name: "test",
    }
}


const Test = () => {
    const funnel = useFunnel<Steps>(options);

    useEffect(() => {
        if (MOCK_DATA.step === 2) {
            funnel.history.push("step2", { id: MOCK_DATA.data.id, pw: MOCK_DATA.data.pw });
        }
        if (MOCK_DATA.step === 3) {
            funnel.history.push("step3", { id: MOCK_DATA.data.id, pw: MOCK_DATA.data.pw, name: MOCK_DATA.data.name });
        }
    }, []);

    return (
        <funnel.Render
            step1={({ history }) => (
                <One onNext={(id) => history.push("step2", { id })} />
            )}
            step2={({ context, history }) => (
                <Two
                    id={context.id}
                    onNext={(pw) => history.replace("step3", { id: context.id, pw })}
                    onBack={() => history.back()}
                />
            )}
            step3={({ context, history }) => (
                <Three
                    id={context.id}
                    pw={context.pw}
                    onBack={() => history.replace("step2", { id: context.id, pw: context.pw })}
                    onComplete={(name) => {
                        alert(`회원가입 완료!\nID: ${context.id}\n비밀번호: ${"*".repeat(context.pw.length)}\n이름: ${name}`);
                    }}
                />
            )}
        />
    );
};

export default Test;