import { useForm } from "../hooks/setForm";

interface FormData {
  city: string;
  zipCode: number;
}

const SecondForm = () => {
  const { city, zipCode, form, inputHandler } = useForm<FormData>({
    city: "Barcelona",
    zipCode: 8042,
  });
  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          City:
        </label>
        <input
          type="text"
          className="form-control"
          name="city"
          value={city}
          onChange={inputHandler}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="number"
          className="form-control"
          name="zipCode"
          value={zipCode}
          onChange={inputHandler}
        />
      </div>
      <pre>{JSON.stringify(form)}</pre>
    </form>
  );
};

export default SecondForm;
