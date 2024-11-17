import { styled } from "styled-components";
import { media } from '../../styles/breakpoints';
import { Position } from "../../types";

interface CardProps {
  tableID: number;
  isEmpty: boolean;
  position: Position;
  percentage: number;
}

const Card = ({ tableID, isEmpty, position, percentage }: CardProps) => {
  return (
    <CardContainer $position={position}>
      <CardContent>
        <CardTitle>no.{tableID + 1}</CardTitle>
        <DesktopOnlyContent>
          <StatusIndicator>{isEmpty ? '빈 자리' : '자리 사용 중'}</StatusIndicator>
        </DesktopOnlyContent>
        {!isEmpty && (
        <ProgressBarContainer>
          <ProgressBarFill percentage={percentage} />
        </ProgressBarContainer>
      )}
      </CardContent>
    </CardContainer>
  );
};

const DesktopOnlyContent = styled.div`
  display: none;

  ${media.laptop} {
    display: block;
  }
`;

const CardContainer = styled.div<{ $position: Position }>`
  position: absolute;
  left: ${({ $position }) => $position.x}px;
  top: ${({ $position }) => $position.y}px;
  
  transition: all 0.3s ease;
  background-color: ${ ({ theme }) => theme.colors.unit };
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  ${media.mobile} {
    padding: 8px;
    border-radius: 8px;
  }

  ${media.laptop} {
    width: 130px;
    height: 130px;
  }
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    z-index: 100;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StatusIndicator = styled.div`
  padding: 8px;
  font-size: 16px;
  font-weight: 600;

`;

const CardTitle = styled.div`
  font-size: 14px;
  color: #333;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;  // progress bar의 높이
  background-color: ${props => props.theme.colors.background};
  border-radius: 4px;
  overflow: hidden;
  position: absolute;
  bottom: 10px;  // 카드 하단에서의 간격
  left: 0;
  padding: 0 10px;  // 좌우 여백
`;

const ProgressBarFill = styled.div<{ percentage: number }>`
  width: ${props => props.percentage}%;
  height: 100%;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 4px;
  transition: width 0.3s ease;  // 부드러운 애니메이션 효과
`;

export default Card;