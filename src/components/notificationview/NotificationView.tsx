import { styled } from "styled-components";
import NotificationPresentation from "./NotificationPresentation";
import { useEffect, useState } from "react";

interface NotificationData {
  notices: string[];
  helpMessages: string[];
}

const NotificationView = () => {
  const [notificationData, setNotificationData] = useState<NotificationData>({
    notices: [],
    helpMessages: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        // API 호출 로직으로 대체 가능
        // const response = await fetch("/api/notifications");
        // const data = await response.json();
        
        // 임시 데이터
        setNotificationData({
          notices: [
            "시간 초과 후 자리 이탈이 지속적일 시, 소지품이 정리될 수 있습니다.",
            "퇴실 시 반드시 퇴실 처리를 해주세요.",
          ],
          helpMessages: [
            "빈 자리를 선택해서 예약할 수 있어요.",
            "내 자리를 선택해서 예약을 취소할 수 있어요.",
            "내 자리를 선택해서 강신 할 수 있어요.",
            "시간이 모두 소진되면 빈 자리가 되니, 종료 30분 전에 꼭 예약 갱신을 해야해요.",
            "사용 종료 시, 꼭 내 자리를 예약 취소해주세요.",
            "해당 프로그램은 그 어떠한 개인정보도 수집하지 않아요.",
          ]
        });
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <NotificationViewContainer>
      <NotificationPresentation 
        notices={notificationData.notices}
        helpMessages={notificationData.helpMessages}
      />
    </NotificationViewContainer>
  );
};

const NotificationViewContainer = styled.div`
  width: 300px;
  padding: 20px;
  border-left: 1px solid ${ ({ theme }) => theme.colors.unitBorder };
`;

export default NotificationView;