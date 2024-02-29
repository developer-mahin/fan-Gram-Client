/* eslint-disable @typescript-eslint/no-explicit-any */
// import FInput from "../Form/FInput";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

interface InputField {
  faq: { question: string; answer: string }[];
  setFaq: any;
}

const AddCelebFaq = ({ faq, setFaq }: InputField) => {
  //   const [inputFields, setInputFields] = useState<InputField[]>([{ value: "" }]);

  //   const handleAddField = () => {
  //     setInputFields([...inputFields, { value: "" }]);
  //   };

  // Step 3
  const handleAddFaq = () => {
    // Step 7
    setFaq([...faq, { question: "", answer: "" }]);
  };

  console.log(faq);

  return (
    <div className="w-full">
      {faq.map((entry, index) => (
        // <div key={index}>
        //   {/* Step 7 */}
        //   <input
        //     type="text"
        //     placeholder="Question"
        //     value={entry.question}
        //     onChange={(e) => {
        //       e.preventDefault();
        //       const updatedFaq = [...faq];
        //       updatedFaq[index].question = e.target.value;
        //       setFaq(updatedFaq);
        //     }}
        //   />
        //   <input
        //     type="text"
        //     placeholder="Answer"
        //     value={entry.answer}
        //     onChange={(e) => {
        //       e.preventDefault();
        //       const updatedFaq = [...faq];
        //       updatedFaq[index].answer = e.target.value;
        //       setFaq(updatedFaq);
        //     }}
        //   />
        // </div>

        <div key={index} className="flex gap-6 my-4">
          <div className="">
            <Label className="">Add Question</Label>
            <Input
              className="w-[100%]"
              type="text"
              value={entry.question}
              placeholder={"Add Question"}
              onChange={(e) => {
                e.preventDefault();
                const updatedFaq = [...faq];
                updatedFaq[index].question = e.target.value;
                setFaq(updatedFaq);
              }}
            />
          </div>
          <div>
            <Label className="mb-2">Add Answer</Label>
            <Textarea
              className=""
              rows={1}
              cols={48}
              placeholder={"Add Answer"}
              value={entry.answer}
              onChange={(e) => {
                e.preventDefault();
                const updatedFaq = [...faq];
                updatedFaq[index].answer = e.target.value;
                setFaq(updatedFaq);
              }}
            />
          </div>
        </div>
      ))}
      <Button className="rounded-full" type="button" onClick={handleAddFaq}>
        Add Faq
      </Button>
    </div>
  );
};

export default AddCelebFaq;

{
  /* {inputFields.map((inputField, index) => (
        <div key={index} className="flex flex-col space-y-3">
          <FInput
            label="Add Title"
            name="question"
            type="text"
            placeholder="Add Title"
            required={true}
            className="w-1/2 border rounded-lg h-10 px-3"
          />
          <FInput
            name="answer"
            type="text"
            label="Add Description"
            placeholder="description"
            required={true}
            className="w-2/3 border rounded-lg h-10 px-3"
          />
        </div>
      ))} */
}
