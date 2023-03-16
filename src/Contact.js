import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid rgba(229, 144, 2, 1);
              color: rgba(229, 144, 2, 1);
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">For Any Queries Contact Us</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.6112620078075!2d74.01633471488711!3d15.5589565891979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfbd5856177d61%3A0xb0d91cb4bd16e9bd!2sGovernment%20College%20of%20Arts%2C%20Science%20%26%20Commerce%2C%20Sanquelim!5e0!3m2!1sen!2sin!4v1676217328522!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Map"
        referrerPolicy="no-referrer-when-downgrade">

      </iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xjvdypkl"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;