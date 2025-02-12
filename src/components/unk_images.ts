import unknowArtistImage from '@/assets/images/unknown_artist.png'
import unknowTrackImage from '@/assets/images/unknown_tract.png'

import {Image} from 'react-native'

export const UnknownArtistImageUri = Image.resolveAssetSource(unknowArtistImage).uri;
export const UnknownTrackImageUri = Image.resolveAssetSource(unknowTrackImage).uri;
