import Swal from "sweetalert2";
import { supabase, ObtainIdAuthSupabase } from "../index";

export const InsertUsers = async (p) => {
  try {
    const { data } = await supabase.from("users").insert(p).select();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const EditThemeCurrency = async (p) => {
  try {
    const { error } = await supabase.from("users").update(p).eq("id", p.id);

    if (error) {
      Swal.fire({
        icon: "error",
        title: "Error al modificar",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    Swal.fire({
      icon: "success",
      title: "Datos modificados",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    console.log(error);
  }
};

export const DisplayUser = async () => {
  try {
    const idAuthSupabase = await ObtainIdAuthSupabase();
    const { data } = await supabase
      .from("users")
      .select()
      .eq("idauth_supabase", idAuthSupabase);

    if (data) {
      return data[0];
    }
  } catch (error) {
    console.log(error);
  }
};
