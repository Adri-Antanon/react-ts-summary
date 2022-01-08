import { useForm } from "../hooks/setForm";

interface FormData {
  email: string;
  name: string;
  age: number;
}

const Form = () => {
  const { inputHandler, form } = useForm<FormData>({
    email: "",
    name: "",
    age: 28,
  });

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={form.email}
          onChange={inputHandler}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={form.name}
          onChange={inputHandler}
        />
      </div>
      <pre>{JSON.stringify(form)}</pre>
    </form>
  );
};

export default Form;
