import {Container, Label, Title, Statistic, StatiscticItem, Percentage} from "./Statistics.styled";
import {randomColor} from "Helpers/function_random";

export const Statisctics = ({ stats, title }) => {
    return (
        <Container>
            {title ? <Title>{title}</Title> : <></>}
            <Statistic>
                {stats.map(({ id, label, percetage }) => {
          return (
                <StatiscticItem key={id} color={randomColor()}>
                    <Label>{label}</Label>
                    <Percentage>{percetage}%</Percentage>
                </StatiscticItem>);
        })}
      </Statistic>
    </Container>
  );
};
