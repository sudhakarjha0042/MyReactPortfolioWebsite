import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 0;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5vh 4.6vw;
  gap: 20px;
  text-align: center;
  flex: 2;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    padding: 0 3.87vw;
    padding-top: 7vh;
    // margin-left: 0.6vw;
    text-align: left;
  }
`;

const Right = styled.div`
  position: relative;
  flex: 3;
  height: 50vh;
  width: 100%;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    height: 70%;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  color: #00FFFF;
  padding-top: 14vh;

  @media screen and (min-width: 768px) {
    font-size: 74px;
  }
`;

const What = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const Desc = styled.p`
  font-size: 18px;
  color: White;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 40px;
  }
`;

const Line = styled.img`
  height: 3px;
  width: 60px;
`;

const Img = styled.img`
  height: 200px;
  width: 200px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 7vh;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(25px);
    }
  }

  @media screen and (min-width: 768px) {
    height: 350px;
    width: 500px;
    left: auto;
    right: 17vh;
    position: absolute;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: orange;
  color: white;
  width: 120px;
  padding: 10px;
  cursor: pointer;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    width: 100px;
    padding: 10px 20px;
  }
`;

const Sub = styled.h2`
  color: orange;
  font-size: 24px;
`;



const Hero = () => {
  return (
    
    <section className={`relative w-full h-screen mx-auto`}>
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <What>
            <Line src="./line.png" />
            <Sub> What we Do</Sub>
          </What>
          <Desc>
            we enjoy creating delightful,human-centred digital experiences
          </Desc>
          <Button>learn more</Button>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[5, 2, 1]} />
            <Sphere args={[1.04, 100, 200]} scale={2.4}>
              <MeshDistortMaterial
                color="#6C0BA9"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src="./moon.png" />
        </Right>
      </Container>
    </section>
   
  );
};

export default Hero;