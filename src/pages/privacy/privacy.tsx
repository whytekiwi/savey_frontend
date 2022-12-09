import React from "react";

const Privacy = () => {
  return (
    <div className="page-content">
      <h1>Privacy Policy</h1>
      <p>
        I am not a lawyer. This isn't in anyway meant to be an exhaustive list.
        It's meant to be reassuring that I'm not up to any ulterior motives.
      </p>
      <p>
        I'm a privacy focused person, with a bit of experience on data
        collection and how we must treat personally identifiable information.
        With that in mind I have two key goals here:
      </p>
      <ol>
        <li>
          I won't collect anything without you knowing about it. And I won't use
          your data in any way expect for the purposes outlined.
        </li>
        <li>
          Once you have submitted any videos, it's free for me to use without
          license, copyright, or other expectations other than what is laid out
          here.
        </li>
      </ol>
      <h2>Data Collection</h2>
      <p>
        The only data I will ever save is data you willingly and knowingly
        submit. To be clear, that covers the photos, videos, and data associated
        with each wish.
      </p>
      <p>I purposely don't collect or use the following</p>
      <ol>
        <li>Cookies and Tracking</li>
        <li>Personal details like email, phone, IP address</li>
      </ol>
      <p>
        To achieve this, I opted to not use any kind of account system. It's all
        an honesty box with uniquely generated keys. That means that you may be
        crafty and start looking for other wishes from other people. There is no
        mechanism to protect this. Remember that the data you submit, you submit
        willingly. Other people may be able to see it.
      </p>
      <h2>Data Usage</h2>
      <p>
        All data is stored securely in the Azure cloud (Australia East region).
        The data is
        <a
          href="https://learn.microsoft.com/en-us/azure/storage/common/storage-service-encryption"
          target="_blank"
        >
          encrypted at rest.
        </a>
        . Remember that we can read data by submitting the correct key, so it is
        possible for the data to be shared. You take the risk when submitting
        private or personal details.
      </p>
      <p>
        I will never sell your videos (including sharing on social media, etc),
        or display them on a giant TV in Times Square. They will be used solely
        for the intention of creating a fun experience for Libby's birthday.
      </p>
      <p>
        In submitting any data, you agree that it's now free for me to use. You
        can not expect any kind of payment, or compensation for sharing with me.
        In return I'll do my best to protect it.
      </p>
    </div>
  );
};

export default Privacy;
