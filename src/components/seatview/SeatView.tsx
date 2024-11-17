import styled from 'styled-components';
import Card from '../card/Card';
import { media } from '../../styles/breakpoints';
import { data } from '../../data';
import { useState, useEffect } from 'react';
import { SeatData } from '../../types';
import { calculateScale } from '../../utils/intex';

const SeatView = () => {
  const [seats, setSeats] = useState<SeatData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const calculateContainerSize = (seats: SeatData[]) => {
    if (seats.length === 0) return { width: 0, height: 0 };
    
    const { scale, minX, minY } = calculateScale(seats);
    const maxX = Math.max(...seats.map(seat => seat.position.x));
    const maxY = Math.max(...seats.map(seat => seat.position.y));

    const width = (maxX - minX) * scale!;
    const height = (maxY - minY) * scale!;
    
    return { width, height };
  };

  useEffect(() => {
    const fetchData = async () => {
      setSeats(data.datas);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if(isLoading) return <div>loading</div>

  const { scale, minX } = calculateScale(seats);
  const { height } = calculateContainerSize(seats);

  return (
    <SeatViewContainer>
      <SeatViewInner style={{height: `${height}px` }}>
        {seats.map((seat) => {
          const maxY = Math.max(...seats.map(s => s.position.y));
          
          return (
            <Card
              key={seat.tableID}
              tableID={seat.tableID}
              isEmpty={seat.isEmpty}
              position={{
                x: (seat.position.x - minX) * scale + 50,
                y: (maxY - seat.position.y) * scale + 50
              }}
              percentage={seat.percentage}
            />
          );
        })}
      </SeatViewInner>
    </SeatViewContainer>
  );
};

const SeatViewContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 100vw;
  
  height: calc(100vh - ${({theme}) => theme.header.height});
  overflow-x: auto;
  /* overflow-y: hidden; */
`;

const SeatViewInner = styled.div`
  position: relative;
  ${media.mobile} {
    display: inline-block;
    /* min-width: min-content; */
    & > * {
      transform: scale(0.8);
    }
  }

  ${media.laptop} {

    /* width: 100%; */
    & > * {
      transform: scale(1);
    }
  }
`;
export default SeatView;