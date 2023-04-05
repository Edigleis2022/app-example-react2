import { Gallery } from '../../components/Gallery';
import { BaseLayout } from '../../Layout/BaseLayout';
import { Contacts } from '../Contacts';


export function GalleryPage() {
  return (
    <BaseLayout appBarTitle='Galeria'>
      <Contacts/>
    </BaseLayout>
  )
}