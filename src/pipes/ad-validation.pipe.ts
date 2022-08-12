import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { ID_VALIDATION_ERROR } from './ad-validation.constants';

@Injectable()
export class IdValidationPipe implements PipeTransform {
	transform(value: string, metadata: ArgumentMetadata) {
		if (metadata.type !== 'param') {
			return value;
		}
		return value;
	}
}
