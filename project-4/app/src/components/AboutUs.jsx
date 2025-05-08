// components/AboutUs.jsx
import styled from "styled-components";

const AboutUs = () => {
  return (
    <Section id="about">
      <Container>
        <Heading>About Us</Heading>
        <Text>
          <strong>FoodApp</strong> brings together great food and fast delivery, right to your doorstep. Whether you're
          craving classic comfort food or discovering new favorites, we help you connect with top local restaurants.
        </Text>
        <Text>
          We value quality, speed, and customer happiness. With a simple interface and reliable service, we make food
          delivery easier, tastier, and more enjoyable.
        </Text>
      </Container>
    </Section>
  );
};

export default AboutUs;

const Section = styled.section`
  background: linear-gradient(135deg, #2c2c2e, #1e1e1f);
  padding: 60px 20px;
  color: #eee;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 36px;
  margin-bottom: 24px;
  color: #ffffff;
`;

const Text = styled.p`
  font-size: 17px;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #dcdcdc;
`;

const InfoBox = styled.div`
  background-color: #3a3a3c;
  border-radius: 10px;
  padding: 30px;
  margin-top: 40px;
  text-align: left;

  h3 {
    font-size: 22px;
    margin-bottom: 16px;
    color: #fff;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
    font-size: 15px;
    color: #ccc;
  }
`;
