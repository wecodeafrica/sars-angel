import Bull, { DoneCallback } from 'bull';

import { IStatemen } from './../../entities/interface';
import { mbVoiceCallProvider } from '../../core/messagebird.provider';

export function voiceConsumer(job: Bull.Job<IStatemen[]>, done: DoneCallback) {
	const { data } = job;
	console.log('VOICE CALL JOB STARTED ---->', job);

	// Call the Email provider
	data.forEach((item) => {
		const phone = item.phone || '';
		const name = item.name || '';
		mbVoiceCallProvider(phone, name);
	});
	done();
}