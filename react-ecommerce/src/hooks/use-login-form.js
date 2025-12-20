import { validateLogin } from "@/lib/auth";
import useUserStore from "@/stores/useStore";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export function useLoginForm() {
  const setUser = useUserStore((state) => state.setUser);

  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await validateLogin(values.email, values.password);
    if (!response.ok) {
      toast.error(response.message);
      return;
    }
    setUser(response.user);

    // redirect /
    navigate("/");
    toast.success("Bienvenido!!");
  };

  return {
    values,
    handleInputChange,
    handleSubmit,
  };
}