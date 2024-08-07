import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import { toast } from "sonner";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./checkout.css";

const validationSchema = Yup.object({
  nombre: Yup.string().min(5, "Minimo 5 caracteres").required("Requerido"),
  email: Yup.string().email("Email inválido").required("Requerido"),
  telefono: Yup.string().required("Requerido"),
});

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");

  let total = getTotalPrice();

  const sendForm = async (values, { setSubmitting }) => {
    try {
      let order = {
        buyer: values,
        items: cart,
        total: total,
      };

      let ordersCollection = collection(db, "orders");
      let productCollection = collection(db, "products");

      cart.forEach(async (elemento) => {
        let refDoc = doc(productCollection, elemento.id);
        await updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
      });

      const res = await addDoc(ordersCollection, order);
      setOrderId(res.id);
      toast.success(`Gracias por tu compra, tu ticket es ${res.id}`);
      clearCart();
      navigate("/");
    } catch (error) {
      toast.error("Error al realizar la compra");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="formContainer">
      {orderId ? (
        <h2>Gracias por tu compra, tu ticket es: {orderId}</h2>
      ) : (
        <Formik
          initialValues={{
            nombre: "",
            email: "",
            telefono: "",
          }}
          validationSchema={validationSchema}
          onSubmit={sendForm}
        >
          {({ isSubmitting }) => (
            <Form className="formNameContainer">
              <div className="formTitles">
                <label htmlFor="nombre">Nombre</label>
                <Field
                  className="formInputs"
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Ingresa tu nombre"
                />
                <ErrorMessage name="nombre" component="div" />
              </div>
              <div className="formTitles">
                <label htmlFor="email">Email</label>
                <Field
                  className="formInputs"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Ingresa tu email"
                />
                <ErrorMessage name="email" component="div" />
              </div>
              <div className="formTitles">
                <label htmlFor="telefono">Teléfono</label>
                <Field
                  className="formInputs"
                  type="text"
                  id="telefono"
                  name="telefono"
                  placeholder="Ingresa tu teléfono"
                />
                <ErrorMessage name="telefono" component="div" />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Comprar
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default Checkout;
