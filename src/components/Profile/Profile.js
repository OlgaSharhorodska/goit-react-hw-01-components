import { CardItem,UserName,TagLocation,Label,Quantity } from './Profiled.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <CardItem>
      <div>
        <img src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <TagLocation>@{tag}</TagLocation>
        <TagLocation>{location}</TagLocation>
      </div>
      <ul>
        <li>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </li>
      </ul>
    </CardItem>
  );
};