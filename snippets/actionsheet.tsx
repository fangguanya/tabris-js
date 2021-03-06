import {ActionSheet, ActionSheetItem, TextView, Button, WidgetCollection, ui} from 'tabris';

const StyledText = (properties: TextView['jsxProperties']) =>
  <TextView textColor='red' {...properties} />;

ui.contentView.append(
  <WidgetCollection>
    <Button left={16} right={16} top={16} onSelect={showActionSheet}>Show ActionSheet</Button>
    <StyledText left={16} right={16} top='prev() 16' alignment='center'/>
  </WidgetCollection>
);

const textView = ui.contentView.find(TextView).first();
const onSelect = ({target, index}) => textView.text = `"${target.actions[index].title}" selected`;
const onClose = () => console.log('ActionSheet closed');

function showActionSheet(...args) {
  ActionSheet.open(
    <ActionSheet title='Actions' onSelect={onSelect} onClose={onClose}>
      Select any of the actions below to proceed.
      <ActionSheetItem title='Search' image='resources/search-black-24dp@3x.png' />
      <ActionSheetItem title='Share' image='resources/share-black-24dp@3x.png' />
      <ActionSheetItem title='Settings' image='resources/settings-black-24dp@3x.png' />
      <ActionSheetItem title='Delete' style='destructive' image='resources/delete-black-24dp@3x.png' />
      <ActionSheetItem title='Cancel' style='cancel' image='resources/close-black-24dp@3x.png' />
    </ActionSheet>
  );
}
