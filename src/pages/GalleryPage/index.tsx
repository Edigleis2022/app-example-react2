
import { BaseLayout } from '../../Layout/BaseLayout';
import { Gallery } from '../../components/Gallery';
import { Contacts } from '../Contacts';


export function GalleryPage() {
  return (
    <BaseLayout appBarTitle='Galeria'>
      <Gallery/>
    </BaseLayout>
  )
}