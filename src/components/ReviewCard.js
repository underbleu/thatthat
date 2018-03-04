import React from 'react'
import { Segment, Comment, Rating } from 'semantic-ui-react'
import styled from 'styled-components'

const CommentBox = styled(Comment.Group)`
  max-width: 100% !important;
`

const UserName = styled(Comment.Author)`
  display: inline-block !important;
`

const CommentText = styled(Comment.Text)`
  margin-top: 2px !important;
  margin-bottom: 0 !important;
`

const StyledRating = styled(Rating)`
  display: block !important;
  margin-top: 5px;
  font-size: .7rem !important;
  &.active::before {
    color: #f8ba00;
  }
`

const ReviewCard = ({
  reviewKey,
  content,
  createdAt,
  displayName,
  photoURL,
  rating,
  uid,
  render,
}) => (
  <Segment as="li">
    <CommentBox>
      <Comment>
        <Comment.Avatar src={photoURL} alt={`${displayName} 프로필 사진`} />
        <Comment.Content>
          <UserName>{displayName}</UserName>
          <Comment.Metadata>{createdAt}</Comment.Metadata>
          <StyledRating defaultRating={rating} maxRating={5} disabled />
          <CommentText>{content}</CommentText>
        </Comment.Content>
        {render(uid, reviewKey, rating)}
      </Comment>
    </CommentBox>
  </Segment>
)

export default ReviewCard
