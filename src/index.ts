import short from 'short-uuid';
import { isValidUUIDV4 } from 'is-valid-uuid-v4';
import { showHUD, Clipboard } from '@raycast/api';

export default async function main() {
  const translator = short();
  const { text: uuid } = await Clipboard.read();
  const isV4 = isValidUUIDV4(uuid);

  const newUuid = isV4 ? translator.fromUUID(uuid) : translator.toUUID(uuid);

  await Clipboard.copy(newUuid);
  await showHUD(`Copied ${isV4 ? 'shortened' : 'expanded'} UUID to clipboard`);
}
