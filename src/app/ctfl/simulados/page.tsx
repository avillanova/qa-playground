import { Link } from '@/components/atoms/actions/Link';
import { Breadcrumb, BreadcrumbItem } from '@/components/molecules/Breadcrumb';

export default function SimuladosPage() {
  return (
    <div>
      <Breadcrumb />
      <h1 className="text-3xl">Simulados</h1>
      <Link href="/ctfl/simulados/1">Simulado 1</Link>
    </div>
  );
}
