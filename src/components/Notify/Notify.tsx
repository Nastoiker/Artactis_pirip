import  {  useState, useMemo, useEffect, MouseEvent } from "react";
import { useTransition } from "@react-spring/web";
import {  Container, Message, Button, Content, Life } from "./styles";
let id = 0;
interface MessageHubProps {
  config?: {
    tension: number;
    friction: number;
    precision: number;
  };
  timeout?: number;
  children: (add: AddFunction) => void;
}
type AddFunction = (msg: string) => void;

interface Item {
  key: number;
  msg: string;
}

export function MessageHub({
  config = { tension: 125, friction: 20, precision: 0.1 },
  timeout = 3000,
  children,
}: MessageHubProps) {
  const refMap = useMemo(() => new WeakMap(), []);
  const cancelMap = useMemo(() => new WeakMap(), []);
  const [items, setItems] = useState<Item[]>([]);
  const transitions = useTransition(items,
      {
        from: { opacity: 0, height: 0, life: "100%" },
    keys: (item) => item.key,
    enter: (item) => async (next, cancel) => {
      cancelMap.set(item, cancel);
      await next({ opacity: 1, height: refMap.get(item).offsetHeight });
      await next({ life: "0%" });
    },
    leave: [{ opacity: 0 }, { height: 0 }],
        // @ts-ignore */

        onRest: (result, ctrl, item) => {
      setItems((state) =>
        state.filter((i) => {
          return i.key !== item.key;
        })
      );
    },
  /*
// @ts-ignore */
    config: (item, index, phase) => (key) =>
      phase === "enter" && key === "life" ? { duration: timeout } : config,
  });

  useEffect(() => {
    children((msg: string) => {
      setItems((state) => [...state, { key: id++, msg }]);
    });
  }, []);
  return (
    <Container>
      {transitions(({ life, ...style }, item) => (
        <Message style={style}>
          <Content ref={(ref: HTMLDivElement) => ref && refMap.set(item, ref)}>
            <Life style={{ right: life }} />
            <p>{item.msg}</p>
            <Button
              onClick={(e: MouseEvent) => {
                e.stopPropagation();
                if (cancelMap.has(item) && life.get() !== "0%")
                  cancelMap.get(item)();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={30}
                width={30}
                viewBox="0 0 24 24"
              >
                <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
              </svg>
            </Button>
          </Content>
        </Message>
      ))}
    </Container>
  );
}
