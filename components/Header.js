import styled from "styled-components";
import Link from "next/link";
import Nav from "./Nav";

const Wrapper = styled.div``;

export default function Header() {
  return (
    <Wrapper>
      <div>
        <Link href="/">Title</Link>
      </div>
      <div>
        <Nav />
      </div>
    </Wrapper>
  );
}
