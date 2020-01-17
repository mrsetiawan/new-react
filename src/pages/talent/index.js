import React from 'react';
import styled from 'styled-components'

const TalentProfile = () => {
  return (
    <p>talent profile</p>
  )
}

const TalentName = ({ name, job }) => {
  return (
    <>
      <p>{name}</p>
      <p>{job}</p>
    </>
  )
}

const TalentInfo = ({ title }) => {
  return (
    <p>{title}</p>
  )
}

// const ButtonInfo = ({ children }) => {
//   return (
//     <button className="btn">{children}</button>
//   )
// }

const ButtonInfo = styled.button `
  float: left;
  margin: 0 5px;
  text-align: center;
  padding: 4px;
  background: rgba(255, 165, 0, 0.55);
  width: 100px;
  border-radius: 5px;
  border: 1px solid #fb9595;`;

const ProfileSection = () => {
  return (
    <>
      <TalentProfile />
      <TalentName name="Muhamad Rahmat Setiawan" job={["Frontend web developer ", "Bussinessman"]} />
      <TalentInfo title="Male" />
      <TalentInfo title="29 Maret 1993" />
      <TalentInfo title="Bandung" />
      <ButtonInfo>Message</ButtonInfo>
      <ButtonInfo>Share</ButtonInfo>
      <ButtonInfo>Hire</ButtonInfo>
    </>
  )
}

const Talent = () => {
  return (
    <>
      <ProfileSection />
    </>
  )
}

export default Talent