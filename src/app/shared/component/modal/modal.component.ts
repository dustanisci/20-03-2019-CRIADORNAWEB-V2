import { Component, OnInit } from '@angular/core';
import {
  AccessibilityConfig,
  AdvancedLayout,
  ButtonEvent,
  ButtonsConfig,
  ButtonsStrategy,
  ButtonType,
  Description,
  DescriptionStrategy,
  DotsConfig,
  GalleryService,
  GridLayout,
  Image,
  ImageModalEvent,
  LineLayout,
  PlainGalleryConfig,
  PlainGalleryStrategy,
  PreviewConfig
} from '@ks89/angular-modal-gallery';

import { VERSION } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public name: string;

  public images: Image[] = [
    new Image(
      0,
      { // modal
        img: ''
      }
    )
  ];

  public imagesHtmlDescriptions = this.images;
  public imagesRect = this.images;
  public imagesMixedSizes = this.images;

  public customPlainGalleryRowConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  public customPlainGalleryColumnConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  public customPlainGalleryRowDescConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  public plainGalleryRow: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({ width: '100%', height: 'auto' }, { length: 0, wrap: true }, 'flex-start')
  };

  public plainGalleryRowSpaceAround: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({ width: '50px', height: '50px' }, { length: 2, wrap: true }, 'space-around')
  };

  public plainGalleryRowATags: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({ width: '95px', height: '63px' }, { length: 4, wrap: true }, 'flex-start'),
    advanced: { aTags: true, additionalBackground: '50% 50%/cover' }
  };

  public plainGalleryColumn: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.COLUMN,
    layout: new LineLayout({ width: '50px', height: '50px' }, { length: 3, wrap: true }, 'flex-start')
  };

  public plainGalleryGrid: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.GRID,
    layout: new GridLayout({ width: '80px', height: '80px' }, { length: 3, wrap: true })
  };

  public singleImage: Image[] = [this.images[0]];

  public dotsConfig: DotsConfig = {
    visible: false
  };

  public customDescription: Description = {
    strategy: DescriptionStrategy.ALWAYS_VISIBLE,
    imageText: 'Look this image ',
    numberSeparator: ' of ',
    beforeTextDescription: ' => '
  };

  public customDescriptionStyle: Description = {
    strategy: DescriptionStrategy.ALWAYS_VISIBLE,
    imageText: 'Look this image ',
    numberSeparator: ' of ',
    beforeTextDescription: ' => ',
    style: {
      bgColor: 'rgba(255,0,0,.5)',
      textColor: 'blue',
      marginTop: '3px',
      marginBottom: '0px',
      marginLeft: '5px',
      marginRight: '5px',
      position: 'absolute',
      top: '0px',
      height: '25px'
    }
  };

  public customDescriptionHideIfEmpty: Description = {
    strategy: DescriptionStrategy.HIDE_IF_EMPTY,
    imageText: 'Look this image ',
    numberSeparator: ' of ',
    beforeTextDescription: ' => '
  };

  public customFullDescription: Description = {
    strategy: DescriptionStrategy.ALWAYS_VISIBLE,
    customFullDescription: 'Custom description of the current visible image'
  };

  public customFullDescriptionHidden: Description = {
    strategy: DescriptionStrategy.ALWAYS_HIDDEN,
    customFullDescription: 'Custom description of the current visible image'
  };

  public buttonsConfigDefault: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.DEFAULT
  };

  public buttonsConfigSimple: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.SIMPLE
  };

  public buttonsConfigAdvanced: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.ADVANCED
  };

  public buttonsConfigFull: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.FULL
  };

  public customButtonsConfigExtUrlNewTab: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.CUSTOM,
    buttons: [
      {
        className: 'ext-url-image',
        type: ButtonType.EXTURL,
        extUrlInNewTab: true
      },
      {
        className: 'download-image',
        type: ButtonType.DOWNLOAD
      },
      {
        className: 'close-image',
        type: ButtonType.CLOSE
      }
    ]
  };

  public customButtonsFontAwesomeConfig: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.CUSTOM,
    buttons: [
      {
        className: 'fas fa-plus white',
        type: ButtonType.CUSTOM,
        ariaLabel: 'custom plus aria label',
        title: 'custom plus title',
        fontSize: '20px'
      },
      {
        className: 'fas fa-times white',
        type: ButtonType.CLOSE,
        ariaLabel: 'custom close aria label',
        title: 'custom close title',
        fontSize: '20px'
      },
      {
        className: 'fas fa-download white',
        type: ButtonType.DOWNLOAD,
        ariaLabel: 'custom download aria label',
        title: 'custom download title',
        fontSize: '20px'
      },
      {
        className: 'fas fa-external-link-alt white',
        type: ButtonType.EXTURL,
        ariaLabel: 'custom exturl aria label',
        title: 'custom exturl title',
        fontSize: '20px'
      }
    ]
  };

  public previewConfigOneImage: PreviewConfig = {
    visible: true,
    number: 1
  };

  public previewConfigNoArrows: PreviewConfig = {
    visible: true,
    arrows: false
  };

  public previewConfigNoClickable: PreviewConfig = {
    visible: true,
    clickable: false
  };

  public previewConfigAlwaysCenter: PreviewConfig = {
    visible: true
  };

  public previewConfigCustomSize: PreviewConfig = {
    visible: true,
    size: { width: '30px', height: '30px' }
  };

  public accessibilityConfig: AccessibilityConfig = {
    backgroundAriaLabel: 'CUSTOM Modal gallery full screen background',
    backgroundTitle: 'CUSTOM background title',

    plainGalleryContentAriaLabel: 'CUSTOM Plain gallery content',
    plainGalleryContentTitle: 'CUSTOM plain gallery content title',

    modalGalleryContentAriaLabel: 'CUSTOM Modal gallery content',
    modalGalleryContentTitle: 'CUSTOM modal gallery content title',

    loadingSpinnerAriaLabel: 'CUSTOM The current image is loading. Please be patient.',
    loadingSpinnerTitle: 'CUSTOM The current image is loading. Please be patient.',

    mainContainerAriaLabel: 'CUSTOM Current image and navigation',
    mainContainerTitle: 'CUSTOM main container title',
    mainPrevImageAriaLabel: 'CUSTOM Previous image',
    mainPrevImageTitle: 'CUSTOM Previous image',
    mainNextImageAriaLabel: 'CUSTOM Next image',
    mainNextImageTitle: 'CUSTOM Next image',

    dotsContainerAriaLabel: 'CUSTOM Image navigation dots',
    dotsContainerTitle: 'CUSTOM dots container title',
    dotAriaLabel: 'CUSTOM Navigate to image number',

    previewsContainerAriaLabel: 'CUSTOM Image previews',
    previewsContainerTitle: 'CUSTOM previews title',
    previewScrollPrevAriaLabel: 'CUSTOM Scroll previous previews',
    previewScrollPrevTitle: 'CUSTOM Scroll previous previews',
    previewScrollNextAriaLabel: 'CUSTOM Scroll next previews',
    previewScrollNextTitle: 'CUSTOM Scroll next previews',

    carouselContainerAriaLabel: 'Current image and navigation',
    carouselContainerTitle: '',
    carouselPrevImageAriaLabel: 'Previous image',
    carouselPrevImageTitle: 'Previous image',
    carouselNextImageAriaLabel: 'Next image',
    carouselNextImageTitle: 'Next image',
    carouselPreviewsContainerAriaLabel: 'Image previews',
    carouselPreviewsContainerTitle: '',
    carouselPreviewScrollPrevAriaLabel: 'Scroll previous previews',
    carouselPreviewScrollPrevTitle: 'Scroll previous previews',
    carouselPreviewScrollNextAriaLabel: 'Scroll next previews',
    carouselPreviewScrollNextTitle: 'Scroll next previews'
  };

  constructor(private galleryService: GalleryService) {
    this.name = `${VERSION.full}`;
  }

  ngOnInit() {

  }

  public openImageModalRow(image: Image) {
    const index: number = this.getCurrentIndexCustomLayout(image, this.images);
    this.customPlainGalleryRowConfig = Object.assign({}, this.customPlainGalleryRowConfig, { layout: new AdvancedLayout(index, true) });
  }

  public openImageModalColumn(image: Image) {
    const index: number = this.getCurrentIndexCustomLayout(image, this.images);
    this.customPlainGalleryColumnConfig = Object.assign(
      {}, this.customPlainGalleryColumnConfig, { layout: new AdvancedLayout(index, true) });
  }

  public openImageModalRowDescription(image: Image) {
    const index: number = this.getCurrentIndexCustomLayout(image, this.imagesRect);
    this.customPlainGalleryRowDescConfig = Object.assign(
      {}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(index, true) });
  }

  public onButtonBeforeHook(event: ButtonEvent) {
    if (!event || !event.button) {
      return;
    }

    if (event.button.type === ButtonType.DELETE) {
      this.images = this.images.filter((val: Image) => event.image && val.id !== event.image.id);
    }
  }

  public onButtonAfterHook(event: ButtonEvent) {
    if (!event || !event.button) {
      return;
    }
  }

  public onCustomButtonBeforeHook(event: ButtonEvent, galleryId: number | undefined) {
    if (!event || !event.button) {
      return;
    }

    if (event.button.type === ButtonType.CUSTOM) {
      this.addRandomImage();

      setTimeout(() => {
        this.galleryService.openGallery(galleryId, this.images.length - 1);
      }, 0);
    }
  }

  public onCustomButtonAfterHook(event: ButtonEvent, galleryId: number | undefined) {
    if (!event || !event.button) {
      return;
    }
  }

  public onCloseImageModal(event: ImageModalEvent) {
    this.customPlainGalleryRowConfig = Object.assign(
      {}, this.customPlainGalleryRowConfig, { layout: new AdvancedLayout(-1, true) });
    this.customPlainGalleryColumnConfig = Object.assign(
      {}, this.customPlainGalleryColumnConfig, { layout: new AdvancedLayout(-1, true) });
    this.customPlainGalleryRowDescConfig = Object.assign(
      {}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(-1, true) });
  }

  public onShowAutoCloseExample(event: ImageModalEvent, galleryId: number) {
    setTimeout(() => {
      this.galleryService.closeGallery(galleryId);
    }, 3000);
  }

  public addRandomImage() {
    const imageToCopy: Image = this.images[Math.floor(Math.random() * this.images.length)];
    const newImage: Image = new Image(this.images.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
    this.images = [...this.images, newImage];
  }

  public openModalViaService(id: number | undefined, index: number) {
    this.galleryService.openGallery(id, index);
  }

  public trackById(index: number, item: Image) {
    return item.id;
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  }
}
