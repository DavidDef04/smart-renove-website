import { redirect } from 'next/navigation';

/** Ancienne URL — redirigée vers Isolation sonore */
export default function IsolationThermiqueRedirect() {
  redirect('/services/isolation-sonore');
}
