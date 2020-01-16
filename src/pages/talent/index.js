import React from 'react';

const TalentProfile = () => {
  return (
    <p>talent profile</p>
  )
}

const TalentName = ({ name, job }) => {
  console.log(job)
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

const ButtonInfo = ({ children }) => {
  return (
    <button>{children}</button>
  )
}

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