import { SeatData } from "../types";

export const calculateScale = (seats: SeatData[]) => {
  if (seats.length === 0) return { scale: 1, minX: 0, minY: 0 };
  
  // 최대/최소 좌표 찾기
  const xCoords = seats.map(seat => seat.position.x);
  const yCoords = seats.map(seat => seat.position.y);
  const minX = Math.min(...xCoords);
  const maxX = Math.max(...xCoords);
  const minY = Math.min(...yCoords);
  const maxY = Math.max(...yCoords);
  
  // 전체 범위 계산
  const rangeX = maxX - minX;
  const rangeY = maxY - minY;

  // 화면 크기에 따른 기본 스케일 계산
  const screenWidth = window.innerWidth;
  let baseScale = 1;

  if (screenWidth <= 768) {  // 모바일
    baseScale = 1.1;
  } else {  // 큰 데스크톱
    baseScale = 1;
  }

  // 컨테이너 크기에 맞게 스케일 계산 (여백 20% 추가)
  const containerWidth = screenWidth * 0.8;  // 화면의 80%
  const containerHeight = window.innerHeight * 0.8;
  
  const scaleX = (containerWidth) / rangeX;
  const scaleY = (containerHeight) / rangeY;
  
  // 더 작은 스케일을 사용하여 비율 유지하고 baseScale 적용
  const scale = Math.min(scaleX, scaleY) * baseScale;
  
  return { scale, minX, minY };
};