export { readTsConfig } from './src/utils/typescript';
export {
  toPropertyName,
  toClassName,
  toFileName,
  names,
  findModuleParent
} from './src/utils/name-utils';
export {
  serializeJson,
  renameSync,
  updateJsonFile,
  readJsonFile,
  readCliConfigFile,
  copyFile
} from './src/utils/fileutils';
export {
  offsetFromRoot,
  ExistingPrettierConfig,
  resolveUserExistingPrettierConfig
} from './src/utils/common';
export { commandsObject } from './src/command-line/nx-commands';
export { readAngularJson, readNxJson, NxJson } from './src/command-line/shared';
export {
  readJsonInTree,
  updateJsonInTree,
  addImportToModule,
  addImportToTestBed,
  getDecoratorPropertyValueNode,
  insert,
  replaceNodeValue,
  addDepsToPackageJson,
  addEntryComponents,
  addMethod,
  readBootstrapInfo,
  removeFromNgModule,
  addRoute,
  addIncludeToTsConfig,
  addGlobal,
  getProjectConfig,
  addProviderToModule,
  addDeclarationToModule,
  addParameterToConstructor,
  getBootstrapComponent,
  createOrUpdate
} from './src/utils/ast-utils';

export {
  getNpmScope,
  getWorkspacePath,
  replaceAppNameWithPath,
  angularSchematicNames,
  editTarget,
  parseTarget,
  serializeTarget
} from './src/utils/cli-config-utils';

export { formatFiles } from './src/utils/rules/format-files';
export { deleteFile } from './src/utils/rules/deleteFile';
export { updateKarmaConf } from './src/utils/rules/update-karma-conf';
import * as strings from './src/utils/strings';

export const stringUtils = strings;
