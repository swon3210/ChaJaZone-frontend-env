import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { getRoomsAsync } from "../../modules/rooms";
import { RootState } from "../../modules";
import { Room, Zone } from "../../api/rooms";

const useRooms = () => {
  const { rooms, selectedRoom } = useSelector(
    (state: RootState) => state.rooms
  );
  const dispatch = useDispatch();

  const loadRoomsByZone = useCallback(
    (payload: Zone) => {
      return dispatch(getRoomsAsync.request(payload));
    },
    [dispatch]
  );

  return {
    rooms,
    selectedRoom,
    loadRoomsByZone,
  };
};

export default useRooms;
