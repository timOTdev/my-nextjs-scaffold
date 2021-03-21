import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div``;

export default function Nav() {
  return (
    <Wrapper>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </Wrapper>
  );
}
