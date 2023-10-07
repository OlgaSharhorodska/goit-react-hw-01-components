import { FriendCard,Name,Avatar,Status,ListOfFriend } from "./FriendList.styled";


const FriendItem = ({ avatar, name, status }) => {
  return (
    <FriendCard>
      <Status $status={status} />
      <Avatar src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </FriendCard>
  );
};

export const FriendsList = ({ friends }) => {
    return (
        <ListOfFriend>
         {friends.map(({id, avatar, name, isOnline})=>(
        <FriendItem
        key={id}
        avatar={avatar}
        name={name}
        status={isOnline}
      />
      ))}    
        </ListOfFriend>
    )
};

