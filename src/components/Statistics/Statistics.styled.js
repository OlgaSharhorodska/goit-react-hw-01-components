import styled from 'styled-components';

export const Container = styled.section`
  width: 800px;
  margin: 0 auto;
  padding: 10px 0;
  background: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2), 2px 4px 6px rgba(0, 0, 0, 0.2);
`;
export const Title = styled.h2`
  font-size: 30px;
  text-align: center;
`;

export const Statistic = styled.ul`
  display: flex;
  height: 100px;
  margin-bottom: 50px;
  padding: 0px;
  gap:5px;
`;

export const StatiscticItem = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${({ color }) => color};
  width: calc(100% / 4);
  font-size: 20px;
  justify-content: center;
  text-align: center;
  border-radius: 10%;
`;

export const Label = styled.span`
  font-size: 20px;
  padding: 10px;
  font-weight: 500;
`;

export const Percentage = styled.span`
  font-size: 20px;
`;