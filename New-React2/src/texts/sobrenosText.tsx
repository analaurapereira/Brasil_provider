import { Text, Paragraph, ParagraphTytle, ParagraphTytle3 } from "../styles/sobrenos";
import img1 from "../assets/img/m4.jpg";

export const SobrenosText = () => {
  return (
    <div>
      <img
        src={img1}
        style={{
          width: "30%",
          height: "50vh",
          marginLeft: "930px",
          marginTop: "200px",
          borderRadius: "10px"
        }}
      />
      <Paragraph>
        <div>
          <ParagraphTytle>Quem somos nós</ParagraphTytle>
        </div>
        <div>
          <Text>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Text>
        </div>
        <div>
          <ParagraphTytle3>NOSSO TRABALHO É VOLTADO A 3 PILARES PRINCIPAIS</ParagraphTytle3>
        </div>
      </Paragraph>
    </div>
  );
}
