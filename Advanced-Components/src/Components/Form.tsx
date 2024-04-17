import {
  ComponentPropsWithoutRef,
  FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

export type FormHandles = {
  clear: () => void;
};

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandles, FormProps>(
  ({ onSave, children, ...otherProps }, ref) => {
    const form = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => {
      return {
        clear() {
          console.log("CLEARING FORM");
          form.current?.reset();
        },
      };
    });

    const handleSummit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      // 原本只能這樣取 data.get("name")
      // 但是我們可以用下面的方式取得物件
      const data = Object.fromEntries(formData);
      onSave(data);
    };

    // form doesn't know how to deal with onSave function
    // it is not a standard prop that would exiost on that element
    // so destructuring it out of the props object

    return (
      <form onSubmit={handleSummit} {...otherProps}>
        {children}
      </form>
    );
  }
);

export default Form;
