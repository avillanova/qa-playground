import { Box } from '@/components/atoms/Box';
import { Button } from '@/components/atoms/actions/Button';
import { Breadcrumb } from '@/components/molecules/Breadcrumb';
import { Questions } from '@/components/organisms/Questions';

export default function SimuladoPage() {
  return (
    <div>
      <Breadcrumb />
      <Questions />
    </div>
  );
}
