import Swal, {SweetAlertIcon} from "sweetalert2";

export function alert(icon: SweetAlertIcon, message: string): void {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
    });

    Toast.fire({
      icon: icon,
      title: message,
    });
  }

export function redirect(link: string) {
    window.open(link, '_blank');
}